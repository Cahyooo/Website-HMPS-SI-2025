<?php

namespace App\Filament\Resources\Lecturers\Pages;

use App\Filament\Resources\Lecturers\LecturerResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditLecturer extends EditRecord
{
    protected static string $resource = LecturerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
