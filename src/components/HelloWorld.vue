<template>

<img src="../assets/img.png" class="img-fluid" alt="...">
<div class="d-flex align-items-center justify-content-center"><div class="mb-2">
  <div class="centered">
    <label for="" class="form-label">Do you have something to confess? Write it down</label>
    <textarea class="form-control" id="confess" rows="3"></textarea>
    <button type="button" class="btn btn-outline-light">Confess</button>
  </div>
</div></div>
                   
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 60%;
  filter: brightness(0.7)!important;
  opacity: 0%;
}
.centered {

  color: white;
  padding: 1.2pc;
  font-size: larger;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin-top: -66%;

}
.form-control{
  margin-bottom: 1.2ch;
}

</style>
