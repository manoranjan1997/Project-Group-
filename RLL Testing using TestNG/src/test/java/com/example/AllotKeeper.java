package com.example;

import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class AllotKeeper {
	
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
  public void studentLogin() throws InterruptedException {
	  
	  wd.get("http://localhost:4200/Adminlogin");
	  wd.findElement(By.cssSelector("#EmailInput")).sendKeys("t@c.c");
	  wd.findElement(By.cssSelector("#PasswordInput")).sendKeys("teja");
	//  wd.findElement(By.cssSelector("body.mat-typography:nth-child(4) app-login.ng-star-inserted:nth-child(2) div.master div.loginDiv div.formDiv:nth-child(3) form.ng-pristine.ng-invalid.ng-touched.ng-submitted div.row.mt-4:nth-child(6) div.col-md-6:nth-child(1) > button.btn.btn-primary.loginButton.w-100")).click();
	  
	  wd.findElement(By.xpath("/html/body/app-root/app-login/div/div/div[2]/form/div/div[1]/button")).click();
	  
	  Thread.sleep(2000);
	  
	  wd.findElement(By.xpath("/html/body/app-root/app-dashboard/div/table/tbody/tr[4]/th/button")).click();

	 
	  
	  wd.findElement(By.xpath("/html/body/app-root/app-allot/div/form/div[5]/select")).sendKeys("bvn");
//	  
	  
//	  Select drpCountry = new Select(wd.findElement(By.name("country")));
//	  Thread.sleep(2000);
//	  
	  wd.findElement(By.xpath("/html/body/app-root/app-allot/div/form/div[6]/button")).click();

  }
	  
	  @AfterTest
		public void  derefer() throws InterruptedException {
			Thread.sleep(2000);
			System.out.println("wd closed");
			wd.close();
  }
  
 
}
