package com.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Feedback {
	
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
  public void feedback() throws InterruptedException {
	  
	  wd.get("http://localhost:4200/Userlogin");
	  wd.findElement(By.cssSelector("#EmailInput")).sendKeys("1001");
	  wd.findElement(By.cssSelector("#PasswordInput")).sendKeys("1001");
	  wd.findElement(By.xpath("/html/body/app-root/app-login-user/div/div/div[2]/form/div/div[1]/button")).click();
	  
	  Thread.sleep(2000);
	  
	  wd.findElement(By.xpath("/html/body/app-root/app-userdashboard/div/table/tbody/tr[1]/td[4]/a")).click();
	  
	  wd.findElement(By.cssSelector("#feedback")).sendKeys("Very good");
	  
	  wd.findElement(By.xpath("/html/body/app-root/app-complaints/div/form/div[2]/button")).click();
	  
	  
  }
  @AfterTest
		public void  derefer() throws InterruptedException {
			Thread.sleep(2000);
			System.out.println("wd closed");
			wd.close();
  }
  }

