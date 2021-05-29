import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], value: string): any {
        if (value) {
            return items.filter(item => item.value.toString()
            .toLowerCase().indexOf(value.toString().toLowerCase()) !== -1);
        }
        return items;
    }
}
