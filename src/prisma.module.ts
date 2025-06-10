import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { ModuleCompiler } from "@nestjs/core/injector/compiler";

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {}