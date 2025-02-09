package com.kraken.tools.configuration.properties;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.nio.file.Path;

@Slf4j
@Configuration
public class ApplicationPropertiesConfiguration {

  @Autowired
  @Bean
  ApplicationProperties applicationProperties(@Value("${kraken.data:#{environment.KRAKEN_DATA}}") final String data) {
    final var dataPath = Path.of(data).toAbsolutePath();
    log.info("Data location is set to " + dataPath);

    return ApplicationProperties.builder()
        .data(dataPath)
        .build();
  }

}
