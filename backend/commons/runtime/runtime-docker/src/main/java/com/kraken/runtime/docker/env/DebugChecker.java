package com.kraken.runtime.docker.env;

import com.kraken.runtime.entity.TaskType;
import org.springframework.stereotype.Component;

import java.util.Map;

import static java.util.Objects.requireNonNull;

@Component
class DebugChecker implements EnvironmentChecker {

  @Override
  public void accept(final Map<String, String> environment) {
    requireEnv(environment, "KRAKEN_VERSION",
        "KRAKEN_GATLING_SIMULATION",
        "KRAKEN_DESCRIPTION",
        "KRAKEN_TASK_ID",
        "KRAKEN_ANALYSIS_URL",
        "KRAKEN_RUNTIME_URL",
        "KRAKEN_STORAGE_URL");
  }

  @Override
  public boolean test(final TaskType taskType) {
    return TaskType.DEBUG == taskType;
  }
}
