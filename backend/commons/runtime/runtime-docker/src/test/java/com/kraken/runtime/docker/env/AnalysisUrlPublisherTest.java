package com.kraken.runtime.docker.env;

import com.kraken.analysis.client.properties.AnalysisClientPropertiesTestConfiguration;
import com.kraken.runtime.entity.TaskType;
import com.kraken.test.utils.TestUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {AnalysisUrlPublisher.class, AnalysisClientPropertiesTestConfiguration.class})
@EnableAutoConfiguration
public class AnalysisUrlPublisherTest {

  @Autowired
  AnalysisUrlPublisher publisher;

  @Test
  public void shouldTest() {
    assertThat(publisher.test(TaskType.RUN)).isFalse();
    assertThat(publisher.test(TaskType.DEBUG)).isTrue();
    assertThat(publisher.test(TaskType.RECORD)).isTrue();
  }

  @Test
  public void shouldGet() {
    final var env = publisher.get();
    assertThat(env.get("KRAKEN_ANALYSIS_URL")).isNotNull();
  }

  @Test
  public void shouldTestUtils(){
    TestUtils.shouldPassNPE(AnalysisUrlPublisher.class);
  }
}
