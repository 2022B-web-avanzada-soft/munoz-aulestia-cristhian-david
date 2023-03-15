import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {PortfolioEntity} from "./portfolio.entity";

@Injectable()
export class PortfolioService{
    constructor(
        @InjectDataSource()
        public dataSource: DataSource
    ) {}

    public portfolioRepository = this.dataSource.getRepository(PortfolioEntity);

    find(options: FindManyOptions<PortfolioEntity>){
        return this.portfolioRepository.find(options)
    }


    findOneById(id:number){
        return this.portfolioRepository.findOne({
            where:{
                id:id
            }
        })
    }

    create(dataCreate: any){
        return this.portfolioRepository.save(dataCreate);
    }

    update(dataUpdate: any, id:number){
        return this.portfolioRepository.save(
            {...dataUpdate,id}
        )
    }

    delete(id:number) {
        return this.portfolioRepository.delete(id);
    }
}