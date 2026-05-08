import { useState, useEffect } from 'react'

/**
 * Generic data-fetching hook
 * @param {Function} fetcher  - async function that returns data
 * @param {Array}    deps     - dependency array (re-fetch when these change)
 */
export default function useFetch(fetcher, deps = []) {
  const [data,    setData]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetcher()
      setData(result)
    } catch (e) {
      setError(e?.response?.data?.message ?? e.message ?? 'Terjadi kesalahan.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchData() }, deps)

  return { data, loading, error, refetch: fetchData }
}