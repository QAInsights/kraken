package com.kraken.storage.client.properties;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
class StorageClientPropertiesConfiguration {

  @Autowired
  @Bean
  StorageClientProperties storageClientProperties(@Value("${kraken.storage.url:#{environment.KRAKEN_STORAGE_URL}}") final String storageUrl) {
    log.info("Storage URL is set to " + storageUrl);

    return StorageClientProperties.builder()
        .storageUrl(storageUrl)
        .build();
  }

}
