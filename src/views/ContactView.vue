<template>
  <div class="contact">
    <h1 class="title">Contact</h1>
    <form>
      <input type="text" placeholder="Name" required/>
      <input type="text" placeholder="Email" required/>
      <input type="text" placeholder="Phone" />
      <textarea placeholder="Write your message...">sdfsdf</textarea>
      <button class="btn">Send</button>
    </form>

  </div>
</template>

<style scoped>

  .contact {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    padding-top: 5rem;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-top: 25px;
    padding: 40px 20px;
    background-color: #56565656;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }


  .btn{
    width: 100%;
    font-size: 16px;
  }
  textarea{
    resize: none;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 200px;
    margin: 10px;
    overflow-y: auto;
    border: 2px solid #4f4f4f;
    box-shadow: none;
    background-color: #4f4f4f56;
    padding: 10px;
    color:white;
    font-size: 16px;
  }

  textarea:focus,input:focus{
    outline:1px solid #f4f4f4cc;
  }
  textarea:hover,input:hover{
    background-color: #4f4f4f;
  }

  input{
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    margin: 10px;
    border: 2px solid #4f4f4f;
    box-shadow: none;
    background-color: #4f4f4f56;
    padding: 10px;
    color:white;
    font-size: 16px;
  }
  @media only screen and (max-width: 900px) {
  form {
    min-width: 100%;
  }
  }
</style>