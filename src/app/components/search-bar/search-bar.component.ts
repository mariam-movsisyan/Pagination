import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent{
    @Output() onSearch = new EventEmitter<string>()
    public search!: string

    onCnageSearch(search: string){
        this.onSearch.emit(search);
        // console.log(search);
    }
}