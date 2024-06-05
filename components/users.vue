<template>
    <div role="tablist" class="tabs tabs-boxed">
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Mis Datos" checked/>
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div class="flex flex-row items-end gap-4">
                <p class="text-xl" >Id:</p>
                <p class="text-base text-primary"> 927342 </p>
            </div>
            <div class="flex flex-row items-end gap-4">
                <p class="text-xl" >Nombre:</p>
                <p class="text-base text-primary"> Nombre Apellido </p>
            </div>
            <div class="flex flex-row items-end gap-4">
                <p class="text-xl" >Email:</p>
                <p class="text-base text-primary"> email@gmail.com </p>
            </div>
            <div class="flex flex-row items-end gap-4">
                <p class="text-xl" >Departamento:</p>
                <p class="text-base text-primary"> Desarrollo </p>
            </div>
            <div class="flex flex-row items-end gap-4">
                <p class="text-xl" >Rol:</p>
                <p class="text-base text-primary"> Usuario</p>
            </div>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Gestionar Usuarios" />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Contenido Gestionar Usuarios</div>
    </div>
</template>