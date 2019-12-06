import {friends} from './Friends';
import {groups} from './Groups';

export class User{
    username:string;
    password:string;
    email:string;
    friendsList:Array<friends>;
    groupsList:Array<groups>;
}