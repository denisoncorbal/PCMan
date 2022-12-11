package com.dgc.PCMan.actuator;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.stereotype.Component;

@Component
@Endpoint(id="database", enableByDefault = true)
public class DBConnect {
    @ReadOperation
    public boolean database(){
        
        return true;
    }
}
