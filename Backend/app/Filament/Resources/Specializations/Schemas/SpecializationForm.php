<?php

namespace App\Filament\Resources\Specializations\Schemas;

use Filament\Forms;
use Filament\Forms\Components\{TextInput, Textarea, Select};
use Filament\Schemas\Components\{Section, Grid};
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class SpecializationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Specialization Information')
                    ->description('Define the name, code, and description for this specialization.')
                    ->icon('heroicon-o-academic-cap')
                    ->columnSpanFull()
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('name')
                                    ->label('Specialization Name')
                                    ->placeholder('e.g. Mobile Computing')
                                    ->helperText('Full title of the specialization.')
                                    ->prefixIcon('heroicon-o-book-open')
                                    ->required()
                                    ->maxLength(100),

                                TextInput::make('code')
                                    ->label('Code')
                                    ->placeholder('e.g. MC')
                                    ->helperText('Short unique identifier (2 letters).')
                                    ->prefixIcon('heroicon-o-hashtag')
                                    ->required()
                                    ->maxLength(20)
                                    ->unique(ignoreRecord: true),
                            ]),

                        Textarea::make('description')
                            ->label('Description')
                            ->placeholder('Write a short description of this specialization...')
                            ->helperText('Explain what students will learn or focus on in this track.')
                            ->columnSpanFull()
                            ->autosize()
                            ->rows(4),
                    ]),
            ]);
    }
}
