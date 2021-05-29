import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "category"
})
export class CategoryPipe implements PipeTransform {
    transform(items: any[], value: string): any {
        console.log(value)
        if (value && value != 'All') {
            return items.filter(item => item.title.indexOf(value) !== -1);
        }
        return items;
    }
}
