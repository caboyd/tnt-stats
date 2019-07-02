import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('matches')
export class MatchesController {



    @Post('upload')
    @UseInterceptors(FileInterceptor('files'))
    uploadReplay(@UploadedFiles() files){
        console.log(files);
    }
}
