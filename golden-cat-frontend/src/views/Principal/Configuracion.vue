<template>
  <v-container fluid>
    <v-layout row center >
      <v-card dark tile flat color="transparent">
            <v-img height="300px" width="400px" :src="logo" ></v-img>

          </v-card>
      <v-flex xs3 order-lg2>
        <v-card-text  class="transparent text-xs-center blue--text display font-weight-bold ">
           <div > FOTO DE PERFIL</div>
        </v-card-text>
        <material-card class="v-card-profile">
          <v-avatar class="text-xs-center mx-auto d-block " slot="offset"  size="130">
            <img  :src="imgUrl" >
          </v-avatar>
          <v-card-text class="text-xs-center" >
            <v-form name="formulario" method="post" enctype="form-data">
              <v-btn color="#5a9dd6" dark v-on="on" @click='pickFile' v-model='imageName' prepend-icon='attach_file'>Seleccionar Imagen </v-btn>
              <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
            </v-form>
          </v-card-text>
        </material-card>
        
      </v-flex>
    </v-layout>
    <v-divider> </v-divider>
    <v-card-text class="transparent text-xs-center blue--text display font-weight-bold ">
      <div > DATOS PERSONALES</div>
    </v-card-text>
    <v-layout  row>
      <v-flex xs2 order-lg2 class="transparent text-xs-center blue--text display font-weight-bold ">
        <v-card-text>NOMBRE :</v-card-text>
      </v-flex>
     <v-flex xs3 order-lg2>
        <v-text-field color="white" small label="" solo v-model="user.name"></v-text-field>
      </v-flex>
      <v-flex   xs2 order-lg2 class="transparent text-xs-center blue--text display font-weight-bold ">
       <v-card-text>PAIS :</v-card-text>
      </v-flex>
      <v-flex xs3 order-lg2>
        <v-text-field color="white" small label="Colombia" solo v-model="Colombia"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout  row>
      <v-flex xs2 order-lg2 class="transparent text-xs-center blue--text display font-weight-bold ">
        <v-card-text>APELLIDO :</v-card-text>
      </v-flex>
      <v-flex xs3 order-lg2>
        <v-text-field color="white" small label="" solo v-model="user.lastName"></v-text-field>
      </v-flex>
      <v-flex xs2 order-lg2 class="transparent text-xs-center blue--text display font-weight-bold ">
        <v-card-text>CIUDAD :</v-card-text>
      </v-flex>
      <v-flex xs3 order-lg2>
        <v-text-field color="white" small label="" solo v-model="user.city"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs2 order-lg2 class="transparent text-xs-center blue--text display font-weight-bold ">
        <v-card-text>CEDULA DE CIUDADANIA :</v-card-text>
      </v-flex>
      <v-flex xs3 order-lg2>
        <v-text-field color="white" small label="" solo v-model="user.identification" ></v-text-field>
      </v-flex>
      <v-flex   xs2 order-lg2 class="transparent text-xs-center blue--text display font-weight-bold ">
        <v-card-text>TELEFONO :</v-card-text>
      </v-flex>
      <v-flex xs3 order-lg2>
        <v-text-field color="white" small label="" phone solo  v-model="user.phone"></v-text-field>
      </v-flex>
    </v-layout>

    <v-divider> </v-divider>
    <v-card-text class="transparent text-xs-center blue--text display font-weight-bold ">
      <div > DATOS CUENTA</div>
    </v-card-text>
    <v-layout row>

      <v-flex xs12 order-lg2  class="transparent text-xs-center blue--text display font-weight-bold ">
        <v-dialog v-model="dialogPassword" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="#5a9dd6" dark v-on="on">Editar Contraseña</v-btn>
            <v-btn  color="success">Guardar cambios </v-btn>
          </template>

          <v-card>
          <v-card dark tile flat color="#0f6ba8" >
            <v-card-title>
              <span class="headline">CONTRASEÑA USUARIO</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field color="white" label="Escribe Contraseña Actual*" type="password" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field color="white" label="Escribe Contraseña Nueva*" type="password" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field color="white" label="Confirma Contraseña Nueva*" type="password" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <h5 class="letra2 text-md- white--text"> *Campo Requerido</h5>
             </v-card-text>
             <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green lighten" dark @click="dialogPassword = false">Salir</v-btn>
              <v-btn color="blue darken-4" dark @click="dialogPassword = false">Guardar</v-btn>
            </v-card-actions>
            </v-card>
          </v-card>

        </v-dialog>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import storage from '@/plugins/firebase'
import uuid from 'uuid/v4'
import Swal from 'sweetalert2'
import api from '@/plugins/api'

export default {
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.getroom()
  },
  data: () => ({
    imgUrl: 'data:image/png;base64,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',
    imageName: '',
    dialogEmail: false,
    dialogPassword: false
  }),
  methods: {
    async getuser () {
      const res = await api.get('/user')
    },
    resetForm () {
      this.$refs.form.reset()
    },
    async save () {
      try {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
        this.resetForm()
      } catch (error) {
        console.error(error)
      }
    },
    pickFile () {
      this.$refs.image.click()
    },

    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        for (let f = 0; f < files.length; f++) {
          const fr = new FileReader()
          fr.readAsDataURL(files[f])
          fr.addEventListener('load', async () => {
            this.imgUrl = fr.result
            const name = uuid()
            var imageRef = storage.ref().child(`images/${name}.jpg`)
            const imageUpload = await imageRef.putString(fr.result, 'data_url')
            const imageUrl = await imageRef.getDownloadURL()
            this.images.push({ imageRef: imageUpload.metadata.fullPath, url: imageUrl })
          })
        }
      } else {
        this.imageName = ''
        // this.imageFile = ''
        this.imageUrl = ''
      }
    },
    initialize () {
      this.desserts = [
        {
          tema: '',
          descripcion: '',
          titulo: '',
          contenido: '',
          imgUrl: ''
        }
      ]
    }
  }
}

</script>
<style >

</style>
