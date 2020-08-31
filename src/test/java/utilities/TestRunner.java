package utilities;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="/Users/vinayakdhulipudi/Projects/bpdtstestharimunu/src/test/java/features",
        glue={"stepDefinitions"},
        tags={},
        format = {"pretty", "html:target/destination"}
)


public class TestRunner {
}