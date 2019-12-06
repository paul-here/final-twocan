import {friends} from './friends';
import {groups} from './groups';

export class user{
    username:string;
    password:string;
    email:string;
    friendsList:Array<friends>;
    groupsList:Array<groups>;
}