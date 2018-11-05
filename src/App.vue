<template>
  <div id="app">
    <nav>
      <div>Traction</div>
        <ul>
          <router-link tag="b-nav-item" to="/reception"><a>Reception</a></router-link> |
          <router-link tag="b-nav-item" to="/samples"><a>Samples</a></router-link> |
          <router-link tag="b-nav-item" to="/libraries"><a>Libraries</a></router-link> |
          <router-link tag="b-nav-item" to="/sequencing-run"><a>Sequencing Run</a></router-link>
        </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav {
  height: 30px;
  width: 100%;
  margin-bottom: 10px;

  ul {
    float: right;
    margin-top: -20px;
    list-style-type: none;

    li {
      display: inline-block;
    }
  }
}

</style>
