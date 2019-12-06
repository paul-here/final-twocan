import {Friends} from './friends';
import {Groups} from './Groups';

export class User{
    username:string;
    password:string;
    email:string;
    friendsList:Array<Friends>;
    groupsList:Array<Groups>;
}