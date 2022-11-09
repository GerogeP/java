package com.ttit.core.http;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ttit.helloworld.R;

import org.json.JSONObject;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class OkhttpActivity extends AppCompatActivity {
    private String url = "https://www.baidu.com/home/other/data/weatherInfo?city=%E6%AD%A6%E6%B1%89&indextype=manht&_req_seqid=0xfc7ab7ff0008878d&asyn=1&t=1588658358650&sid=1421_31125_21122_31426_31342_31270_31464_31228_30823_26350_31164";
    private EditText tvRes;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.okhttp_layout);
        tvRes = findViewById(R.id.et_res);
        findViewById(R.id.btn_get).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                get();
            }
        });
        findViewById(R.id.btn_post).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                post();
            }
        });
    }

    /**
     * 异步get请求
     */
    private void get() {
        //第一步获取okHttpClient对象
        OkHttpClient client = new OkHttpClient.Builder()
                .build();
        //第二步构建Request对象
        Request request = new Request.Builder()
                .url(url)
                .get()
                .build();
        //第三步构建Call对象
        Call call = client.newCall(request);
        //第四步:异步get请求
        call.enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.i("ttit", e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                //得到的子线程
                String result = response.body().string();
                Log.e("ttit", result);
                tvRes.setText(result);
            }
        });
    }

    /**
     * 异步post请求
     */
    private void post() {
        //第一步创建OKHttpClient
        OkHttpClient client = new OkHttpClient.Builder()
                .build();
        //第二步创建RequestBody（Form表达）
//        RequestBody body = new FormBody.Builder()
//                .add("mobile", "demoData")
//                .add("password", "demoData")
//                .build();
        Map m = new HashMap();
        m.put("mobile", "demoData");
        m.put("password", "demoData");
        JSONObject jsonObject = new JSONObject(m);
        String jsonStr = jsonObject.toString();
        RequestBody requestBodyJson =
                RequestBody.create(MediaType.parse("application/json;charset=utf-8")
                        , jsonStr);
        //第三步创建Rquest
        Request request = new Request.Builder()
                .url("http://192.168.31.32:8080/renren-fast/app/login")
                .addHeader("contentType", "application/json;charset=UTF-8")
                .post(requestBodyJson)
                .build();
        //第四步创建call回调对象
        final Call call = client.newCall(request);
        //第五步发起请求
        call.enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.i("onFailure", e.getMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                String result = response.body().string();
                tvRes.setText(result);
            }
        });
    }
}
