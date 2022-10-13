package com.ttit.core.http;

import android.content.res.AssetManager;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.ttit.helloworld.R;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public class JsonAcitivity extends AppCompatActivity {
    private static final String TAG = "JsonAcitivity";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.json_layout);
        findViewById(R.id.button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                parseEasyJson();
            }
        });
    }

    private void parseEasyJson() {
        try {
            //获得assets资源管理器（assets中的文件无法直接访问，可以使用AssetManager访问）
            AssetManager assetManager = getAssets();
            //使用IO流读取json文件内容
            InputStreamReader inputStreamReader = new InputStreamReader(assetManager.open("person.json"), "UTF-8");
            BufferedReader br = new BufferedReader(inputStreamReader);//使用字符高效流
            String line;
            StringBuilder builder = new StringBuilder();
            while ((line = br.readLine()) != null) {
                builder.append(line);
            }
            br.close();
            inputStreamReader.close();
            String jsonStr = builder.toString();
            List<Person> persons = new ArrayList<Person>();
            JSONArray jsonArray = new JSONArray(jsonStr);
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = (JSONObject) jsonArray.get(i);
                Person person = new Person();
                person.setId(i + "");
                person.setName(jsonObject.getString("name"));
                person.setAge(jsonObject.getString("age"));
                persons.add(person);
            }
            Log.e(TAG, "parseEasyJson: " + persons.toString());
//            Toast.makeText(this, persons.toString(), Toast.LENGTH_SHORT).show();

            // 使用google的Gson进行解析
            Gson gson = new Gson();
            Type type = new TypeToken<List<Person>>() {
            }.getType();
            List<Person> persons2 = gson.fromJson(jsonStr, type);
            Toast.makeText(this, persons2.toString(), Toast.LENGTH_SHORT).show();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
