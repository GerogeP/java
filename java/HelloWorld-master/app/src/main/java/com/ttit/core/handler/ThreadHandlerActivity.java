package com.ttit.core.handler;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ttit.helloworld.R;

import java.util.Timer;
import java.util.TimerTask;

public class ThreadHandlerActivity extends AppCompatActivity {
    private int num = 0;
    private TextView tv;
    private WorkThread workThread;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.handler_layout);
        tv = findViewById(R.id.tv_content);
        findViewById(R.id.btn_send).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Timer().schedule(new TimerTask() {
                    @Override
                    public void run() {
                        workThread.mHandler.sendEmptyMessage(0);
                    }
                }, 0, 1000);
            }
        });
        // 启动新线程
        workThread = new WorkThread();
        workThread.start();
    }

    class WorkThread extends Thread {
        public Handler mHandler;

        public void run() {
            Looper.prepare();
            mHandler = new Handler() {
                // 定义处理消息的方法
                @Override
                public void handleMessage(Message msg) {
                    if (msg.what == 0) {
                        num++;
                        ThreadHandlerActivity.this.runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                tv.setText(String.valueOf(num));
                            }
                        });
                    }
                }
            };
            Looper.loop();
        }
    }
}
