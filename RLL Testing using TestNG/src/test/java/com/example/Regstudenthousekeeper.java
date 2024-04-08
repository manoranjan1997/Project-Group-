package com.example;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;


public class Regstudenthousekeeper {
	WebDriver wd=null;
	@BeforeTest
	public void intiate() {
		System.out.println("config intiated");
		//register the webdriver =>browser vendor 
				WebDriverManager.chromedriver().setup();
				//creating an object to the object
				 wd=new ChromeDriver();
				//maximize the browser
				wd.manage().window().maximize();
	}
	
	@Test
	public void Regstudenthousekeepe() throws InterruptedException {
		System.out.println("test1 intiated ");
		wd.get("http://localhost:4200/Adminlogin");
		wd.findElement(By.xpath("//*[@id=\"EmailInput\"]")).sendKeys("s@c.c");
		wd.findElement(By.xpath("//*[@id=\"PasswordInput\"]")).sendKeys("123");
		wd.findElement(By.xpath("/html/body/app-root/app-login/div/div/div[2]/form/div/div[1]/button")).click();
		Thread.sleep(2000);
		

		wd.findElement(By.xpath("//button[contains(.,' Register Student')]")).click();
				
		wd.findElement(By.xpath("//*[@id=\"inputRoom\"]")).sendKeys("101");
	    wd.findElement(By.xpath("//*[@id=\"inputFloor\"]")).sendKeys("1");
		wd.findElement(By.xpath("/html/body/app-root/app-registerstudent/div/form/div[4]/button")).click();
		
		
		
		
		wd.findElement(By.xpath("//button[contains(.,' Register Housekeeper')]")).click();
		
		
		wd.findElement(By.xpath("//*[@id=\"inputRoll\"]")).sendKeys("bin");
		wd.findElement(By.xpath("//*[@id=\"inputRoom\"]")).sendKeys("101");
		wd.findElement(By.xpath("/html/body/app-root/app-register-housekeeper/div[1]/form/div[3]/button")).click();
		
		
	}
	

	
	
	
}