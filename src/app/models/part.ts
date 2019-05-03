import { Category } from '../models/category';
import { User } from '../models/user';
import { Manufacture } from '../models/manufacture';
import { CarModel } from '../models/carModel';

export class Part {
    part_name: String;
    category: Category;
    description: String;
    user: User;
    manufacture: Manufacture;
    carModel: CarModel;
    price: Number;
    manufacture_year_from: Number;
    manufacture_year_to: Number;
    waranty: Boolean;
    is_approved: Boolean;
    viewed: Number;
    likes: Number;
    is_featured: Boolean;
    rank: Number;
    created_at: Date;
}