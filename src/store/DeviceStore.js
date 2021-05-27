import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Пылесосы'},
            {id: 4, name: 'Самокаты'},
            {id: 5, name: 'Ноутбуки'}
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'LG'},
            {id: 4, name: 'Lenovo'},
            {id: 5, name: 'Siemens'},
            {id: 6, name: 'Xioamy'}
        ];
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 100000, rating: 5},
            {id: 2, name: 'Iphone X', price: 100000, rating: 5},
            {id: 3, name: 'Macbook air', price: 100000, rating: 5},
            {id: 4, name: 'Macbook pro', price: 100000, rating: 5},
            {id: 5, name: 'Galaxy Note 10', price: 100000, rating: 5},
            {id: 6, name: 'Galaxy Note 20', price: 100000, rating: 5}
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}