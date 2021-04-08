export function mensaje(mensaje, tipo){
    const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 2000, 
        didOpen: (toast) => { 
            toast.addEventListener('mouseenter', Swal.stopTimer), 
            toast.addEventListener('mouseleave', Swal.resumeTimer) 
        } 
    })              
    Toast.fire({ icon: tipo, title: mensaje })
}

  