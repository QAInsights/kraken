package com.kraken.runtime.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Value;

import java.util.List;

import static java.util.Objects.requireNonNull;

@Value
@Builder
public class Task {
  String id;
  Long startDate;
  ContainerStatus status;
  TaskType type;
  List<Container> containers;
  String description;

  @JsonCreator
  Task(
      @JsonProperty("id") final String id,
      @JsonProperty("startDate") final Long startDate,
      @JsonProperty("status") final ContainerStatus status,
      @JsonProperty("type") final TaskType type,
      @JsonProperty("containers") final List<Container> containers,
      @JsonProperty("description") final String description
  ) {
    super();
    this.id = requireNonNull(id);
    this.startDate = requireNonNull(startDate);
    this.status = requireNonNull(status);
    this.type = requireNonNull(type);
    this.containers = requireNonNull(containers);
    this.description = requireNonNull(description);
  }
}
