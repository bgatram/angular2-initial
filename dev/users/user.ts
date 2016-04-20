/**
 * Created by Bala on 4/20/2016.
 */
import {Component} from 'angular2/core';

export class Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}
export class User{
    id: number;
    name: string;
    phone: string;
    email: string;
    address = new Address();
}


