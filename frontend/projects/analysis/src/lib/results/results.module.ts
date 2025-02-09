import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultsListComponent} from 'projects/analysis/src/lib/results/results-list/results-list.component';
import {StorageModule} from 'projects/storage/src/lib/storage.module';
import {VendorsModule} from 'projects/vendors/src/lib/vendors.module';
import {DateModule} from 'projects/date/src/lib/date.module';
import {IconModule} from 'projects/icon/src/lib/icon.module';
import {DialogModule} from 'projects/dialog/src/lib/dialog.module';
import {AnalysisModule} from 'projects/analysis/src/lib/analysis.module';
import {DebugModule} from 'projects/analysis/src/lib/results/debug/debug.module';
import {ResultsListService} from 'projects/analysis/src/lib/results/results-list.service';
import {IsDebugChunkStorageNodePipe} from './is-debug-chunk-storage-node.pipe';
import {TreeModule} from 'projects/tree/src/lib/tree.module';
import {StorageListService} from 'projects/storage/src/lib/storage-list.service';

@NgModule({
  declarations: [ResultsListComponent, IsDebugChunkStorageNodePipe],
  exports: [ResultsListComponent, DebugModule],
  entryComponents: [ResultsListComponent],
  imports: [
    CommonModule,
    StorageModule,
    VendorsModule,
    DateModule,
    IconModule,
    DialogModule,
    AnalysisModule,
    TreeModule,
  ],
  providers: [
    ResultsListService,
    StorageListService,
    IsDebugChunkStorageNodePipe,
  ]
})
export class ResultsModule {
}
