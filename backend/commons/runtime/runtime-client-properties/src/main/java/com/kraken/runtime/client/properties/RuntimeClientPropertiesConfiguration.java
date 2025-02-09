package com.kraken.runtime.client.properties;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Slf4j
@Configuration
class RuntimeClientPropertiesConfiguration {

  @Autowired
  @Bean
  RuntimeClientProperties runtimeClientProperties(@Value("${kraken.runtime.url:#{environment.KRAKEN_RUNTIME_URL}}") final String runtimeUrl) {
    log.info("Runtime URL is set to " + runtimeUrl);

    return RuntimeClientProperties.builder()
        .runtimeUrl(runtimeUrl)
        .build();
  }

}
