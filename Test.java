//TODO:                                                                        
//interfaces                                                                   
//floats and doubles                                                           
//exception handling                                                           
//superclasses                                                                 
//arrays                                                                       

import java.io.*;


class Test
{
  //inner class                                                                
  private class FooPrivate
  {
    private int i = 0;
    public boolean doStuff()
    {
      return true;
    }

  }
  public void doBadStuff() throws IOException                                
  {
    throw new IOException("Bad stuff happened!");
  }
   
  public  void main(String[] args)
  {
    FooPrivate foo = new FooPrivate();
    foo.doStuff();
    try{  
      doBadStuff();
    }catch(IOException bad){
      System.out.println("bad stuff really DID happen");
    }


    System.out.println("Greetings fellow citizens!");
  }
}

