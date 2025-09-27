package com.zenpaws.zenpaws.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class StaticResourceConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String uploadPath = "file:/C:/Users/Acer/Documents/GitHub/ZenPaws-New-/ZenPaws/uploads/"; // <-- must match PetService path

        registry.addResourceHandler("/uploads/**")
                .addResourceLocations(uploadPath);
    }
}
