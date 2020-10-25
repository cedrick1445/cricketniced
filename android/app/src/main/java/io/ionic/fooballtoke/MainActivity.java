package io.ionic.fooballtoke;

import android.os.Bundle;
import android.widget.Toast;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  int counter;
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  counter =0;
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  }

  @Override
  public void onBackPressed() {
    if(counter>0){
      finish();
    }else{
      counter++;
      Toast.makeText(this, "Press Back to Exit", Toast.LENGTH_SHORT).show();
    }
  }
}
