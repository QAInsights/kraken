import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugEditorComponent} from 'projects/analysis/src/lib/results/debug/debug-editor/debug-editor.component';
import {DebugEditorContentService} from 'projects/analysis/src/lib/results/debug/debug-editor/debug-editor-content.service';
import {debugEditorContentServiceSpy} from 'projects/analysis/src/lib/results/debug/debug-editor/debug-editor-content.service.spec';
import {StorageNodeEditorContentService} from 'projects/storage/src/lib/storage-editor/storage-node-editors/storage-node-editor-content.service';
import {STORAGE_NODE} from 'projects/storage/src/lib/storage-editor/storage-node-editors/storage-node-editor';
import {testStorageFileNode} from 'projects/storage/src/lib/entities/storage-node.spec';
import SpyObj = jasmine.SpyObj;
import {DialogService} from 'projects/dialog/src/lib/dialog.service';
import {dialogsServiceSpy} from 'projects/dialog/src/lib/dialog.service.spec';
import {testDebugChunk} from 'projects/analysis/src/lib/results/debug/debug-chunks-list/debug-chunks-list.service.spec';

describe('DebugEditorComponent', () => {
  let component: DebugEditorComponent;
  let fixture: ComponentFixture<DebugEditorComponent>;
  let debug: SpyObj<DebugEditorContentService>;
  let dialogs: SpyObj<DialogService>;

  beforeEach(async(() => {
    debug = debugEditorContentServiceSpy();
    dialogs = dialogsServiceSpy();

    TestBed.configureTestingModule({
      declarations: [DebugEditorComponent],
      providers: [
        {provide: StorageNodeEditorContentService, useValue: debug},
        {provide: STORAGE_NODE, useValue: testStorageFileNode()},
        {provide: DialogService, useValue: dialogs}
      ]
    })
      .overrideProvider(StorageNodeEditorContentService, {useValue: debug})
      .overrideTemplate(DebugEditorComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.debug).toBeTruthy();
    expect(component.splits).toBeTruthy();
  });

  it('inspectSession create', () => {
    component.debug = {chunk: testDebugChunk()} as any;
    component.inspectSession();
    expect(dialogs.inspect).toHaveBeenCalledWith('Gatling Session', 'session');
  });
});
