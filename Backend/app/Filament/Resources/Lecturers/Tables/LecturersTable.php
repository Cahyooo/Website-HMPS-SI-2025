<?php

namespace App\Filament\Resources\Lecturers\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class LecturersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('photo')
                    ->label('Foto')
                    ->circular()
                    ->imageSize(50)
                    ->disk('public')
                    ->visibility('public')
                    ->defaultImageUrl(asset('storage/photos/default.jpg'))
                    ->toggleable(isToggledHiddenByDefault: false),

                TextColumn::make('nidn')
                    ->label('NIDN')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('full_name')
                    ->label('Nama Dosen')
                    ->description(fn($record) => $record->slug)
                    ->searchable()
                    ->sortable()
                    ->limit(40)
                    ->wrap(),

                TextColumn::make('email')
                    ->label('Email')
                    ->icon('heroicon-m-envelope')
                    ->copyable()
                    ->copyMessage('Email berhasil disalin!')
                    ->copyMessageDuration(1500)
                    ->searchable()
                    ->sortable()
                    ->limit(30),

                TextColumn::make('education')
                    ->label('Lulusan')
                    ->limit(40)
                    ->tooltip(fn($record) => $record->education)
                    ->searchable(),

                TextColumn::make('research_focus')
                    ->label('Fokus Penelitian')
                    ->limit(50)
                    ->tooltip(fn($record) => $record->research_focus)
                    ->searchable(),

                TextColumn::make('phone_number')
                    ->label('No. HP')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->icon('heroicon-m-phone')
                    ->copyable()
                    ->copyMessage('Nomor berhasil disalin!')
                    ->copyMessageDuration(1500),
            ])

            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
