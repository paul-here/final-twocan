import {Friends} from './friends';
import {Groups} from './groups';

export class User {
    username:string;
    password:string;
    email:string;
    friendsList:Array<Friends>;
    groupsList:Array<Groups>;
}