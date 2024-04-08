package com.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class UpdateAndChangePassword {
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
	public void UpdateAndChangePassword() throws InterruptedException {
		System.out.println("test1 intiated");
		wd.get("http://localhost:4200/Userlogin");
		Thread.sleep(2000);
		//wd.findElement(By.className("updateprofile prof-button")).click();
		wd.findElement(By.xpath("//*[@id=\"EmailInput\"]")).sendKeys("1001");
		wd.findElement(By.xpath("//*[@id=\"PasswordInput\"]")).sendKeys("Gopi");
		wd.findElement(By.xpath("/html/body/app-root/app-login-user/div/div/div[2]/form/div/div[1]/button")).click();
		Thread.sleep(2000);
		wd.findElement(By.xpath("/html/body/app-root/app-userdashboard/app-user/div[1]/button[4]/span")).click();
		Thread.sleep(2000);
		wd.findElement(By.xpath("/html/body/app-root/app-profile/div/button[1]")).click();
		wd.findElement(By.xpath("//*[@id=\"floor\"]")).sendKeys("2");
		wd.findElement(By.xpath("//*[@id=\"room\"]")).sendKeys("201");
		Thread.sleep(2000);
		wd.findElement(By.xpath("/html/body/app-root/app-profile/div/div[2]/div/div/div[2]/form/button")).click();
		Thread.sleep(3000);
		
		
		wd.findElement(By.xpath("/html/body/app-root/app-profile/div/button[2]")).click();
		Thread.sleep(2000);
		wd.findElement(By.xpath("//*[@id=\"exampleInputEmail1\"]")).sendKeys("Gopi");
		Thread.sleep(2000);
		wd.findElement(By.xpath("//*[@id=\"exampleInputPassword1\"]")).sendKeys("Mani");
		Thread.sleep(2000);
		wd.findElement(By.xpath("//*[@id=\"confirmPassword\"]")).sendKeys("Mani");
		Thread.sleep(2000);
		wd.findElement(By.xpath("/html/body/app-root/app-profile/div/div[1]/div/div/div[2]/form/button")).click();
		Thread.sleep(3000);
		
		
		
	}
	
	
	
	@AfterTest
	public void  derefer() {
		System.out.println("wd closed");
		wd.close();
	}
}