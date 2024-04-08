package com.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class AdminRegistrationAndLogin {
	WebDriver wd=null;
	@BeforeTest
	public void intiate() {
		System.out.println("config intiated");
		//register the webdriver =>browser vendor 
		WebDriverManager.edgedriver().setup();
		//creating an object to the object
		wd=new EdgeDriver();
		//maximize the browser
		wd.manage().window().maximize();
	}
	@Test
	public void test1() throws InterruptedException {
		System.out.println("test1 intiated");
		wd.get("http://localhost:4200/mainlogin");
		//supply any data

		wd.findElement(By.cssSelector("body > app-root > app-mainlogin > div > div.button-container > button:nth-child(2)")).click();
		wd.findElement(By.cssSelector("body > app-root > app-login > div > div > div.formDiv > form > div > div:nth-child(2) > button > strong")).click();

		wd.findElement(By.id("username")).sendKeys("m.@m");
		wd.findElement(By.id("password")).sendKeys("shaheda");
		wd.findElement(By.id("hostel")).sendKeys("mphasis");

		wd.findElement(By.cssSelector("body > app-root > app-admin-register > div > div > div > form > div:nth-child(13)")).click();

		Thread.sleep(2000);
	}

	@Test
	public void test2() throws InterruptedException {
		System.out.println("test1 intiated");
		//supply any data
		wd.findElement(By.cssSelector("#EmailInput")).sendKeys("m.@m");
		wd.findElement(By.id("PasswordInput")).sendKeys("shaheda");
		//		 wd.findElement(By.id("hostel")).sendKeys("aba");

		wd.findElement(By.cssSelector(".btn.btn-primary.loginButton.w-100")).click();

		Thread.sleep(2000);


	}

	@AfterTest
	public void  derefer() {
		System.out.println("wd closed");
		wd.close();
	}
}