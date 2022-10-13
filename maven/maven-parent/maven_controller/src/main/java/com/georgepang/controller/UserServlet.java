package com.georgepang.controller;

import com.georgepang.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet
public class UserServlet extends HttpServlet {
    @Override
    protected void  service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException{
        System.out.println("UserServlet .....");

        UserService.uservervice();
    }

}
