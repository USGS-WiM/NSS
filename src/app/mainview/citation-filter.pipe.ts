import { Pipe, PipeTransform } from '@angular/core';
import { Citation } from '../shared/interfaces/citation';

@Pipe({
    name: 'citationfilter',
    pure: false
})
export class CitationFilterPipe implements PipeTransform {
    transform(citations: Citation[], filter: Number): any {
        if (!citations || !filter) {
            return [];
        }
        // filter citations array, citations which match and return true will be
        // kept, false will be filtered out
        return citations.filter(item => item !== null &&  item.id === filter);
    }
}
