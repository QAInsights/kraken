import { IsDebugChunkStorageNodePipe } from './is-debug-chunk-storage-node.pipe';
import {analysisConfigurationServiceSpy} from 'projects/analysis/src/lib/analysis-configuration.service.spec';
import {testStorageFileNode} from 'projects/storage/src/lib/entities/storage-node.spec';

describe('IsDebugChunkStorageNodePipe', () => {
  it('create an instance', () => {
    const pipe = new IsDebugChunkStorageNodePipe(analysisConfigurationServiceSpy());
    expect(pipe).toBeTruthy();
    expect(pipe.transform(testStorageFileNode())).toBeFalsy();
    expect(pipe.transform({path: 'gatling/results/015-dsfdsf-015sdf-qsdqs/debug/my_request.debug', type: 'FILE', depth: 4, length: 42, lastModified: 1337})).toBeTruthy();
  });
});
