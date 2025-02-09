import {TestBed} from '@angular/core/testing';

import {ConfigurationService, loadConfiguration} from './configuration.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {fail} from 'assert';
import {Configuration} from './configuration';
import {ENVIRONMENT} from 'projects/commons/src/lib/config/configuration-environment';
import SpyObj = jasmine.SpyObj;

export const configurationServiceMock = (): ConfigurationService => {
  return new ConfigurationService(null, null);
};

export const configurationServiceSpy = (): SpyObj<ConfigurationService> => {
  return jasmine.createSpyObj('ConfigurationService', ['url', 'value']);
};

describe('ConfigurationService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ConfigurationService,
        {
          provide: ENVIRONMENT, // you can also use InjectionToken
          useValue: {configUrl: 'assets/config.json'}
        },
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load config', () => {
    const testConf: Configuration = {
      version: 'version',
      applicationId: 'application',
      commandApiUrl: 'commandApiUrl',
      dockerApiUrl: 'dockerApiUrl',
      storageApiUrl: 'storageApiUrl',
      docUrl: 'docUrl'
    };
    service.load().then(config => expect(config).toBeDefined(), () => fail('load failed'));
    const req = httpTestingController.expectOne('assets/config.json');
    expect(req.request.method).toEqual('GET');
    req.flush(testConf);
    expect(service._config.value).toEqual(testConf);
  });

  it('should loadConfiguration hook', () => {
    const configService = configurationServiceMock();
    spyOn(configService, 'load');
    loadConfiguration(configService)();
    expect(configService.load).toHaveBeenCalled();
  });

  it('should return applicationId', () => {
    expect(service.applicationId).toBe('application');
  });

  it('should return command API URL', () => {
    expect(service.commandApiUrl).toBe('commandApiUrl');
  });

  it('should return executor API URL', () => {
    expect(service.dockerApiUrl).toBe('dockerApiUrl');
  });

  it('should return value', () => {
    expect(service.value('docUrl')).toBe('docUrl');
  });

  it('should return storage API URL', () => {
    expect(service.storageApiUrl).toBe('storageApiUrl');
  });

  it('should return Doc URL', () => {
    expect(service.docUrl('/path')).toBe('docUrl/path');
  });

  it('should return version', () => {
    expect(service.version('key')).toBe('version_key');
  });
});
