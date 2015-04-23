
package co.edu.uniandes.eckotur.web.test;

/**
 
 * @author estudiante
 */

    
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.junit.AfterClass;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
 
public class EckoturTest {
        private static WebDriver driver;
        private static String baseUrl;
        private static boolean acceptNextAlert = true;
        private static StringBuffer verificationErrors = new StringBuffer();
 
        @BeforeClass
        public static void setUp() throws Exception {
            driver = new FirefoxDriver();
            baseUrl = "http://localhost:8080";
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        }
 
 
         @AfterClass
        public static void tearDown() throws Exception {
            // Se cierra el navegador.
            driver.quit();
           // Se verifica que se haya cerrado efectivamente el navegador.
            String verificationErrorString = verificationErrors.toString();
            if (!"".equals(verificationErrorString)) {
                fail(verificationErrorString);
            }

        
        
        }

@Test
    public void tLogin() throws Exception {
 
      
 
        boolean success = false;
        driver.findElement(By.partialLinkText("Login")).click();
 
 
        Thread.sleep(5000);
       
//        driver.findElement(By.id("userName")).clear();       
//        driver.findElement(By.id("userName")).sendKeys("JM32");
//        driver.findElement(By.id("Password")).clear();
//        driver.findElement(By.id("Password")).sendKeys("JM32");
//      
//       
//        
//        driver.findElement(By.id("btnlogin")).click();
//        Thread.sleep(1000);
// 
//    
//       
// 
// 
// 
//        
//        List<WebElement> rows =driver.findElements(By.xpath("//table[contains(@id,'Table')]/tbody/tr"));
//        for (WebElement webElement : rows) {
//            List<WebElement> elems = webElement.findElements(By.xpath("td"));
//            if (elems.get(0).getText().equals("JM32") && elems.get(1).getText().equals("JM32")) {
//                
//                success = true;
//            }
//        }
 
        assertTrue(success);
        Thread.sleep(2000);
    }




}

    

