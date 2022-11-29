import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
} from "@nestjs/common";
import { ImageService } from "./image.service";
import { CreateImageDto } from "./dto/create-image.dto";
import { UpdateImageDto } from "./dto/update-image.dto";
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { PropertyService } from "../property/property.service";
@Controller("image")
export class ImageController {
  constructor(
    private readonly imageService: ImageService,
    private readonly propertyService: PropertyService
  ) {}

  @Post(":id")
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: `./public/upload/image`,
        filename: (req, file, callback) => {
          callback(null, file.originalname);
        },
      }),
    })
  )
  async uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Param("id") property_id: number
  ) {
    const property = await this.propertyService.findOne(property_id);
    // console.log(files[0]);
    return await Promise.all(
      files.map(
        async (file) =>
          await this.imageService.create(
            { name: file.filename, path: file.path } as CreateImageDto,
            property
          )
      )
    );
    // return this.imageService.create({});
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.imageService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.imageService.remove(+id);
  }
}
