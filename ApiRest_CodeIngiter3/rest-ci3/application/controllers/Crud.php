<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Crud extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    public function index()
    { 
		$acc="scr";
		$tab="empleados";
        $this->load->view("api_header");
        $data['datos'] = json_encode( array('Error' => -1, 'mensaje' => 'No se Encontro la Funcion') );
        if( $acc == "scr" ) {
            $query = $this->db->get($tab);
            $data['datos'] = json_encode($query->result());
        }
        $this->load->view("datos", $data);
    }

    public function borrar($id=0)
    { 
		$acc="del";
		$tab="empleados";
        $this->load->view("api_header");
        $data['datos'] = json_encode( array('Error' => -1, 'mensaje' => 'No se Encontro la Funcion') );
        if( $acc == "del" ) {
			$this->db->delete($tab, array('id' => $id));  
			$data['datos'] = json_encode(["success"=>1]);
        }
        $this->load->view("datos", $data);
    }

   public function consultar($id=0)
    { 
		$acc="con";
		$tab="empleados";
        $this->load->view("api_header");
        $data['datos'] = json_encode( array('Error' => -1, 'mensaje' => 'No se Encontro la Funcion') );
        if( $acc == "con" ) {
			$query = $this->db->get_where($tab, array('id' => $id));
            $data['datos'] = json_encode($query->result());
        }
        $this->load->view("datos", $data);
    }

   public function modificar($id=0)
    { 
		$data = json_decode(file_get_contents('php://input'), TRUE);
		$nombre= $data->nombre;
		$data = array(
				'id' => $id,
				'nombre' => $nombre
		);
		$acc="mod";
		$tab="empleados";
        $this->load->view("api_header");
        if( $acc == "mod" ) {
	        $this->db->where('id',$id)->update($tab,$data);
			$data['datos'] = json_encode(["success"=>1]);
        }
        $this->load->view("datos", $data);
    }

   public function insertar()
    { 
		$data = json_decode(file_get_contents('php://input'), TRUE);
		$nombre= $data->nombre;

		$acc="agr";
		$tab="empleados";
        $this->load->view("api_header");
        if( $acc == "agr" ) {
			$data = array(
				'nombre' => $nombre
			);
			$this->db->insert($tab, $data);
			$data['datos'] = json_encode(["success"=>1]);
        }
        $this->load->view("datos", $data);
    }

	


}