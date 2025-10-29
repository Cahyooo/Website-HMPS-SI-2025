<?php

namespace App\Filament\Resources\Lecturers\Schemas;

use App\Models\Lecturer;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class LecturerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Lecturer Information')
                    ->description('Fill in the lecturer’s personal and professional details.')
                    ->icon('heroicon-o-user-circle')
                    ->columnSpanFull()
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('nidn')
                                    ->label('NIDN')
                                    ->placeholder('e.g. 1234567890')
                                    ->helperText('Nomor Induk Dosen Nasional.')
                                    ->unique(ignoreRecord: true, table: Lecturer::class, column: 'nidn')
                                    ->validationMessages([
                                        'unique' => 'NIDN ini sudah terdaftar untuk dosen lain.',
                                    ])
                                    ->prefixIcon('heroicon-o-identification')
                                    ->required(),

                                TextInput::make('full_name')
                                    ->label('Full Name')
                                    ->placeholder('e.g. Dr. Ahmad Yusuf, M.Kom.')
                                    ->helperText('Full name of the lecturer.')
                                    ->prefixIcon('heroicon-o-user')
                                    ->required(),
                            ]),

                        Grid::make(2)
                            ->schema([
                                TextInput::make('email')
                                    ->label('Email Address')
                                    ->placeholder('e.g. lecturer@example.com')
                                    ->helperText('Official email used for academic communication.')
                                    ->prefixIcon('heroicon-o-envelope')
                                    ->email()
                                    ->required(),

                                TextInput::make('education')
                                    ->label('Highest Education')
                                    ->placeholder('e.g. S3 - Computer Science')
                                    ->helperText('Latest formal education level.')
                                    ->prefixIcon('heroicon-o-academic-cap'),
                            ]),

                        TextInput::make('research_focus')
                            ->label('Research Focus')
                            ->placeholder('e.g. Artificial Intelligence, IoT')
                            ->helperText('Main research interests or expertise.')
                            ->prefixIcon('heroicon-o-light-bulb'),
                    ]),

                Section::make('Contact & Additional Info')
                    ->description('Optional contact and profile details.')
                    ->icon('heroicon-o-phone')
                    ->collapsible()
                    ->columnSpanFull()
                    ->schema([
                        FileUpload::make('photo')
                            ->label('Foto Dosen')
                            ->image()
                            ->imageEditor()
                            ->directory('photos')
                            ->disk('public')
                            ->visibility('public')
                            ->maxSize(10000)
                            ->preserveFilenames()
                            ->helperText('Unggah foto berformat JPG, PNG, atau WEBP. Maks 10 MB.')
                            ->downloadable()
                            ->previewable(),

                        TextInput::make('phone_number')
                            ->label('Phone Number')
                            ->placeholder('e.g. +62 812 3456 7890')
                            ->helperText('Contact number (optional).')
                            ->prefixIcon('heroicon-o-device-phone-mobile')
                            ->tel(),

                        Textarea::make('address')
                            ->label('Address')
                            ->placeholder('Enter lecturer’s full address...')
                            ->helperText('Home or office address.')
                            ->rows(3)
                            ->columnSpanFull()
                            ->autosize(),
                    ]),
            ]);
    }
}
