package com.kraken.storage.file;

import com.google.common.testing.NullPointerTester;
import com.kraken.tools.configuration.properties.ApplicationProperties;
import com.kraken.tools.configuration.properties.ApplicationPropertiesTest;
import org.junit.Test;

import static com.google.common.testing.NullPointerTester.Visibility.PACKAGE;

public class FileSystemStorageWatcherServiceTest {

  @Test
  public void shouldPassTestUtils() {
    new NullPointerTester()
        .setDefault(ApplicationProperties.class, ApplicationPropertiesTest.APPLICATION_PROPERTIES)
        .testConstructors(FileSystemStorageWatcherService.class, PACKAGE);
  }

}
