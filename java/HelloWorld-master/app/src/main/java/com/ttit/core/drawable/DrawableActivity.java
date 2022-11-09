package com.ttit.core.drawable;

import android.graphics.Color;
import android.graphics.Rect;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.drawable.shapes.OvalShape;
import android.os.Build;
import android.os.Bundle;
import android.widget.Button;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import com.ttit.helloworld.R;

public class DrawableActivity extends AppCompatActivity {

    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_drawable);
        Button btnOval = findViewById(R.id.btn_oval);
        //ShapeDrawable： 绘制圆形shape
        ShapeDrawable shapeDrawable = new ShapeDrawable(new OvalShape());
        shapeDrawable.getPaint().setColor(Color.BLUE);
        Rect rect = new Rect();
        rect.top = 0;
        rect.left = 0;
        rect.bottom = 50;
        rect.right = 50;
        shapeDrawable.setBounds(rect);
        btnOval.setBackground(shapeDrawable);
    }
}