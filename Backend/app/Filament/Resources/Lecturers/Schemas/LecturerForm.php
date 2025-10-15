<?php

namespace App\Filament\Resources\Lecturers\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class LecturerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('lecturer_code')
                    ->required(),
                TextInput::make('full_name')
                    ->required(),
                Select::make('gender')
                    ->options(['Male' => 'Male', 'Female' => 'Female']),
                DatePicker::make('birth_date'),
                TextInput::make('email')
                    ->label('Email address')
                    ->email(),
                TextInput::make('phone_number')
                    ->tel(),
                Textarea::make('address')
                    ->columnSpanFull(),
                TextInput::make('position'),
                TextInput::make('specialization'),
                Select::make('status')
                    ->options(['Active' => 'Active', 'Inactive' => 'Inactive', 'Retired' => 'Retired'])
                    ->default('Active')
                    ->required(),
                DatePicker::make('joined_date'),
                TextInput::make('photo'),
            ]);
    }
}
